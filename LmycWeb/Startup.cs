﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using LmycWeb.Data;
using LmycWeb.Models;
using LmycWeb.Services;
using Microsoft.AspNetCore.Http;
using System.IO;
using AspNet.Security.OpenIdConnect.Primitives;

namespace LmycWeb
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddMvc();

            services.AddDbContext<ApplicationDbContext>(options => {
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));

                // Register the entity sets needed by OpenIddict.
                // Note: use the generic overload if you need
                // to replace the default OpenIddict entities.
                options.UseOpenIddict();
            });

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Register the OAuth2 validation handler.
            services.AddAuthentication()
                .AddOAuthValidation();

            // Configue Identity to use the same JWT clasim as OpenIddict instead
            // of the legacy WS-Federation clasim it uses by defaul(ClaimTypes),
            // which saves you from doing the mapping in your authorization controller.
            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            });


            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();

            // Register the OpenIddict services.
            // Note: use the generic overload if you need
            // to replace the default OpenIddict entities.
            services.AddOpenIddict(options =>
            {
                // Register the Entity Framework stores.
                options.AddEntityFrameworkCoreStores<ApplicationDbContext>();

                // Register the ASP.NET Core MVC binder used by OpenIddict.
                // Note: if you don't call this method, you won't be able to
                // bind OpenIdConnectRequest or OpenIdConnectResponse parameters.
                options.AddMvcBinders();

                // Enable the token endpoint (required to use the password flow).
                options.EnableTokenEndpoint("/connect/token");

                // Allow client applications to use the grant_type=password flow.
                options.AllowPasswordFlow();

                // During development, you can disable the HTTPS requirement.
                options.DisableHttpsRequirement();
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
<<<<<<< HEAD
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApplicationDbContext dbContext)
=======
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApplicationDbContext context)
>>>>>>> 4d3ae4bf2ebda2db966958b869c40ff6103061d6
        {
            app.Use(async (HttpContext httpContext, Func<Task> next) =>
            {
                await next.Invoke();

                if (httpContext.Response.StatusCode == 404)
                {
                    httpContext.Request.Path = new PathString("/index.html");
                    await next.Invoke();
                }
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //app.Use(async (HttpContext httpContext, Func<Task> next) =>
            //{
            //    await next.Invoke();

            //    if (httpContext.Response.StatusCode == 404 && !httpContext.Request.Path.Value.Contains("/api"))
            //    {
            //        httpContext.Request.Path = "/index.html";
            //        await next.Invoke();
            //    }
            //});

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
<<<<<<< HEAD
            // DummyData.Initialize(dbContext);
                                }
=======
           // DummyData.Initialize(context);

        }
>>>>>>> 4d3ae4bf2ebda2db966958b869c40ff6103061d6
    }
}
