using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Produkty.Data.Migrations
{
    /// <inheritdoc />
    public partial class Products : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "938e9e50-b5a9-4f03-b3b0-d9b751e9f2df");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd2a2d57-3161-4ee0-8341-9e7592c56247");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bea5214d-13b6-43ea-baba-d2143d6b98f6");

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1b250980-8877-413a-87af-4b930ba9d5b7", "8c634d53-aff3-4ac1-b858-ee844660025c", "User", "USER" },
                    { "689ae0da-e384-44ef-aee2-e8cf1f47d04a", "96271871-1fec-4e04-8213-3101f7bb4e55", "Admin", "ADMIN" },
                    { "84b0994b-d579-45bf-87db-5092f7a6f12a", "bbf0378a-9082-4476-b64e-723766ac9faa", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Laptop Lenovo", "Laptop", 2000.0 },
                    { 2, "Drukarka Brother", "Drukarka", 1000.0 },
                    { 3, "Słuchawki Logitech", "Słuchawki", 100.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1b250980-8877-413a-87af-4b930ba9d5b7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "689ae0da-e384-44ef-aee2-e8cf1f47d04a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84b0994b-d579-45bf-87db-5092f7a6f12a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "938e9e50-b5a9-4f03-b3b0-d9b751e9f2df", "39685deb-eaf8-4b6c-85c9-4441d2e9efc6", "Employee", "EMPLOYEE" },
                    { "bd2a2d57-3161-4ee0-8341-9e7592c56247", "87f610bb-2a28-4381-8caf-273f32a1c12c", "Admin", "ADMIN" },
                    { "bea5214d-13b6-43ea-baba-d2143d6b98f6", "ebfb6440-a9c0-42ad-90e5-a0c6da51e44a", "User", "USER" }
                });
        }
    }
}
