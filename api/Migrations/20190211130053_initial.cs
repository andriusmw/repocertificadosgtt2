using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "type",
                table: "Certificates",
                newName: "repositorio");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Certificates",
                newName: "password");

            migrationBuilder.AddColumn<string>(
                name: "alias",
                table: "Certificates",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "contacto_renovacion",
                table: "Certificates",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "id_orga",
                table: "Certificates",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "integration_list",
                table: "Certificates",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nombre_cliente",
                table: "Certificates",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "observaciones",
                table: "Certificates",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "alias",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "contacto_renovacion",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "id_orga",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "integration_list",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "nombre_cliente",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "observaciones",
                table: "Certificates");

            migrationBuilder.RenameColumn(
                name: "repositorio",
                table: "Certificates",
                newName: "type");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Certificates",
                newName: "name");
        }
    }
}
