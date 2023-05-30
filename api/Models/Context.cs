using Microsoft.EntityFrameworkCore;

namespace XC.Models;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }

    public DbSet<Country> Countries { get; set; } = null!;
    public DbSet<State> States { get; set; } = null!;
}