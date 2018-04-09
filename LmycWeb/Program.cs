﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using LmycWeb.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace LmycWeb
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            // using (var scope = host.Services.CreateScope())
            // {
            //     var serviceProvider = scope.ServiceProvider;
            //
            //     try
            //     {
            //         var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            //
            //         var roleManager = serviceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
            //
            //         MyIdentityDataInitializer.SeedData(userManager, roleManager);
            //     }
            //     catch
            //     {
            //
            //     }
            // }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
