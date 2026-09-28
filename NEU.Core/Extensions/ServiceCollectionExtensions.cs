using Autofac;
using Autofac.Extras.DynamicProxy;
using Castle.DynamicProxy;
using Microsoft.Extensions.DependencyInjection;
using NEU.Core.Utilities.Interceptors;
using NEU.Core.Utilities.IoC;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDependencyResolvers(this IServiceCollection services, ICoreModule[] modules)
        {
            foreach (var module in modules)
            {
                module.Load(services);
            }

            return ServiceTool.Create(services);
        }
        public static void AddAutofacDependency(this ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(ServiceTool).Assembly)
                   .AsImplementedInterfaces()
                   .EnableInterfaceInterceptors(new ProxyGenerationOptions
                   {
                       Selector = new AspectInterceptorSelector()
                   }).InstancePerLifetimeScope();
        }
    }
}
