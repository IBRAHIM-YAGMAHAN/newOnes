using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using NEU.Core.CrossCuttingConcerns.Caching;
using NEU.Core.CrossCuttingConcerns.Caching.Microsoft;
using NEU.Core.Utilities.IoC;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace NEU.Core.DependencyResolvers
{
    public class CoreModule : ICoreModule
    {
        public void Load(IServiceCollection services)
        {
            services.AddMemoryCache();
            services.AddSingleton<ICacheManager, MemoryCacheManager>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>(); // user vs bilgilere erişebilmek iiçin
            services.AddSingleton<Stopwatch>();
        }
    }
}
