using Microsoft.EntityFrameworkCore;
using XC.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<CountryContext>(opt =>
    opt.UseInMemoryDatabase("CountryList"));
builder.Services.AddDbContext<StateContext>(opt =>
    opt.UseInMemoryDatabase("StateList"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
