using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Week4WebAPIHandsOn.Controllers
{
    [Authorize(Roles = "POC,Admin")] 
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet("secure")]
        public IActionResult SecureGet()
        {
            return Ok("Access granted to authorized role (Admin or POC).");
        }
    }
}
