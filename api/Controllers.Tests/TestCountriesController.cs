using NUnit.Framework;
using Moq;
using Microsoft.EntityFrameworkCore;
using Moq.EntityFrameworkCore;

using api.Controllers;
using XC.Models;

namespace XC.UnitTests.Models;

[TestFixture]
public class TestCountriesController
{

    private Mock<Context> mock;
    CountriesController _controller;
    private List<Country> countriesList;
    private List<State> statesList;

    [SetUp]
    public void SetUp()
    {
        mock = new Mock<Context>();
        countriesList = new List<Country>()
        {
            new Country { Id = 1, Name = "country1", Code = "C1" },
            new Country { Id = 2, Name = "country2", Code = "C2" },
            new Country { Id = 3, Name = "country3", Code = "C3" }
        };

        statesList = new List<State>()
        {
            new State { Id = 1, Name = "state1", Code = "S1", CountryId = 1, Country = countriesList[0] },
            new State { Id = 2, Name = "state2", Code = "S2", CountryId = 2, Country = countriesList[1] }
        };

        mock.Setup<DbSet<Country>>(x => x.Countries)
            .ReturnsDbSet(countriesList);

        mock.Setup<DbSet<State>>(x => x.States)
            .ReturnsDbSet(statesList);
        
        _controller = new CountriesController(mock.Object);
    }

    [Test]
    public async Task GetCountries_WhenCalled_ReturnsAllCountries()
    {
        var countries = (await _controller.GetCountries()).Value;
        Assert.NotNull(countries);
        Assert.AreEqual(3, countries.Count());
    }

    [TestCase(1)]
    [TestCase(2)]
    [TestCase(3)]
    public async Task GetCountry_ValidInput_ReturnsCountry(int id)
    {
        mock.Setup(x => x.Countries.FindAsync(id))
            .ReturnsAsync(countriesList.Find(c => c.Id == id));

        var country = (await _controller.GetCountry(id)).Value;
        Assert.NotNull(country);
        Assert.AreEqual(id, country.Id);
    }

    public async Task GetCountry_InvalidInput_ReturnsNotFound()
    {
        mock.Setup(x => x.Countries.FindAsync(It.IsAny<int>()))
            .ReturnsAsync((Country)null);

        var response = await _controller.GetCountry(2);

        var country = (await _controller.GetCountry(2)).Value;
        Assert.Null(country);
    }

    [Test]
    public async Task GetStates_WhenCalled_ReturnsStates()
    {
        await _controller.GetStates("a");
    }

    [Test]
    public async Task PostCountry_WhenCalled_AddsCountry()
    {
        var testCountry = new Country { Id = 20, Name = "test", Code = "TS" };
        await _controller.PostCountry(testCountry);

        mock.Verify(m => m.Countries.Add(It.IsAny<Country>()), Times.Once());
    }

    [Test]
    public async Task PostCountry_Duplicatecode_ReturnsError()
    {
        var dupeCountry = new Country { Id = 20, Name = "test", Code = "C1" };
        await _controller.PostCountry(dupeCountry);

        mock.Verify(m => m.Countries.Add(It.IsAny<Country>()), Times.Never());
    }
}