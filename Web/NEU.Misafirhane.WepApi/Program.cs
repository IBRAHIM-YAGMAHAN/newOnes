using System.Runtime.InteropServices;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using NEU.Core.Utilities.Interceptors;
using NEU.Core.Utilities.IoC;
using NEU.Misafirhane.Business.Container;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Autofac.Extras.DynamicProxy;
using Castle.DynamicProxy;
using NEU.Core.Extensions;
using NEU.Misafirhane.WepApi.Mapping;
using NEU.Misafirhane.Business.Concrete;
using NEU.Core.Utilities.Security.Jwt;
using FluentValidation.AspNetCore;
using System.Reflection;
using Autofac.Core;
using NEU.Core.DependencyResolvers;
using Microsoft.Extensions.Logging;

using Serilog;
using Serilog.Events;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using DataAccess.Concrete;



 var builder = WebApplication.CreateBuilder(args);

string logWarningPath = Path.Combine(@Directory.GetCurrentDirectory() + "/LogFile/", "WarningLog.txt");
string logErrorPath = Path.Combine(@Directory.GetCurrentDirectory() + "/LogFile/", "ErrorLog.txt");

builder.Host.UseSerilog((context, config) =>
{
    config
        .MinimumLevel.Warning()
        .Enrich.FromLogContext()
        .WriteTo.File(
            path: logWarningPath,
            restrictedToMinimumLevel: LogEventLevel.Warning,
            rollingInterval: RollingInterval.Day,
            retainedFileCountLimit: 30, // Eski loglarý temizleme
            outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}")
     .WriteTo.File(
            path: logErrorPath,
            restrictedToMinimumLevel: LogEventLevel.Error,
            rollingInterval: RollingInterval.Day,
            retainedFileCountLimit: 30, // Eski loglarý temizleme
            outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}");
});
// Add services to the container.
builder.Services.AddControllers().AddNewtonsoftJson(x =>
{
    x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    x.SerializerSettings.Converters.Add(new NEU.Misafirhane.WepApi.Mapping.DateOnlyJsonConverter());
});

builder.Services.AddDbContext<Context>();

ValidatorOptions.Global.LanguageManager.Culture = new System.Globalization.CultureInfo("tr");

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();  //yorum satırı yaparız sonra
ExtensionsProject.ContainerDependencies(builder.Services); // Extensions sýnýfýný kullanýn
builder.Services.AddAutoMapper(typeof(AutoMapperConfig).Assembly);
builder.Services.AddControllersWithViews();
// CORS konfigürasyonu
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});


var tokenOptions = builder.Configuration.GetSection("TokenOptions").Get<TokenOptions>();

builder.Services.AddJwtAuthentication(tokenOptions.SecurityKey, tokenOptions.Issuer, tokenOptions.Audience);
ExtensionsProject.CustomValidator(builder.Services);
// Autofac konfigürasyonu

//builder.Services.AddHttpClient<RecaptchaService>();

builder.Services.AddDependencyResolvers(new ICoreModule[]
           {
                new CoreModule(),
           });

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());


builder.Services.AddFluentValidationAutoValidation(config =>
{
    config.DisableDataAnnotationsValidation = true; 
});


var app = builder.Build();

app.ConfigureCustomExceptionMiddleware();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseDeveloperExceptionPage();
    app.UseSwagger();   //ikiside yorum
    app.UseSwaggerUI();
}

app.UseCors("AllowOrigin");

app.UseHttpsRedirection();


ServiceTool.SetServiceProvider(app.Services);


app.UseStaticFiles();

//resimler ekledimde kulanırız.

//app.UseStaticFiles(new StaticFileOptions
//{
//    FileProvider = new PhysicalFileProvider(
//        Path.Combine(Directory.GetCurrentDirectory(), "..", "uploads")),
//    RequestPath = "/uploads"
//});


app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
