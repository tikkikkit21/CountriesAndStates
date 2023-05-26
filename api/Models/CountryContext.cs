using Microsoft.EntityFrameworkCore;

namespace XC.Models;

public class CountryContext : DbContext
{
    public CountryContext(DbContextOptions<CountryContext> options)
        : base(options)
    {
    }

    public DbSet<Country> Countries { get; set; } = null!;
}