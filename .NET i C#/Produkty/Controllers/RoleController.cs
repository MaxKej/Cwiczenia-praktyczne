using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Produkty.Controllers
{
    public class RoleController : Controller
    {
        private readonly RoleManager<IdentityRole> _manager;

        public RoleController(RoleManager<IdentityRole> roleManager)
        {
            _manager = roleManager;
        }
        public IActionResult Index()
        {
            var roles = _manager.Roles;
            return View(roles);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(string roleName)
        {
            // Sprawdź, czy nazwa roli nie jest pusta ani null
            if (string.IsNullOrWhiteSpace(roleName))
            {
                // Obsłuż błąd - nazwa roli jest wymagana
                return BadRequest("Nazwa roli nie może być pusta.");
            }

            // Utwórz nowy obiekt IdentityRole na podstawie podanej nazwy roli
            var role = new IdentityRole
            {
                Name = roleName,
                Id = Guid.NewGuid().ToString(), // Ustaw unikalne ID
                NormalizedName = roleName.ToUpper(), // Ustaw normalizowaną nazwę
                ConcurrencyStamp = Guid.NewGuid().ToString() // Ustaw unikalny Concurrency Stamp
            };

            if (!_manager.RoleExistsAsync(role.Name).GetAwaiter().GetResult())
            {
                _manager.CreateAsync(new IdentityRole(role.Name)).GetAwaiter().GetResult();
            }

            return RedirectToAction("Index");
        }


    }
}
