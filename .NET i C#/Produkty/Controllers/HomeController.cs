using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Produkty.Models;
using System.Diagnostics;

namespace Produkty.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Authorize]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [Authorize(Roles = "Admin, Employee")]
        public IActionResult AddProducts()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public IActionResult ModifyProducts()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
