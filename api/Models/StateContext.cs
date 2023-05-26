using Microsoft.EntityFrameworkCore;

namespace XC.Models;

public class StateContext : DbContext
{
    public StateContext(DbContextOptions<StateContext> options)
        : base(options)
    {
    }

    public DbSet<State> States { get; set; } = null!;
}