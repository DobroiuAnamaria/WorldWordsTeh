using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Enginizer.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddPointsToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Points",
                table: "Words",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Points",
                table: "Words");
        }
    }
}
