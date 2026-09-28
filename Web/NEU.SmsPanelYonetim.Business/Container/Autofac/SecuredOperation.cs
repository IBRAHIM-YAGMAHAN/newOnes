using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using NEU.Core.Extensions;

[AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = true)]
public class SecuredOperationAttribute : Attribute, IAuthorizationFilter
{
    private string _roles;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public SecuredOperationAttribute(string roles)
    {
        _roles = roles;
        _httpContextAccessor = new HttpContextAccessor();
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var roleClaims = _httpContextAccessor.HttpContext.User.ClaimRoles();
        if (roleClaims.Count(x => x.Contains(_roles)) > 0)
            return;
        else
            throw new Exception("Authorization Denied.");
    }
}
