using NUnit.Framework;
using Moq;
using Microsoft.EntityFrameworkCore;
using Moq.EntityFrameworkCore;

using api.Controllers;
using XC.Models;

namespace XC.UnitTests.Models;

[TestFixture]
public class TestStatesController
{

    private Mock<Context> mock;
    StateController _controller;
    private List<State> statesList;

    [SetUp]
    public void SetUp()
    {
        mock = new Mock<Context>();

        statesList = new List<State>()
        {
            new State { Id = 1, Name = "name1", Code = "code1", CountryId = 1 },
            new State { Id = 2, Name = "name2", Code = "code2", CountryId = 1 }
        };

        mock.Setup<DbSet<State>>(x => x.States)
            .ReturnsDbSet(statesList);

        _controller = new StateController(mock.Object);
    }

    [Test]
    public async Task GetStates_WhenCalled_ReturnsAllStates()
    {
        var states = (await _controller.GetStates()).Value;
        Assert.NotNull(states);
        Assert.AreEqual(2, states.Count());
    }

    [TestCase(1)]
    [TestCase(2)]
    public async Task GetState_ValidInput_ReturnsState(int id)
    {
        mock.Setup(x => x.States.FindAsync(id))
            .ReturnsAsync(statesList.Find(c => c.Id == id));

        var state = (await _controller.GetState(id)).Value;
        Assert.NotNull(state);
        Assert.AreEqual(id, state.Id);
    }

    [TestCase(0)]
    [TestCase(3)]
    public async Task GetState_InvalidInput_ReturnsNotFound(int id)
    {
        mock.Setup(x => x.States.FindAsync(id))
            .ReturnsAsync(statesList.Find(c => c.Id == id));

        var state = (await _controller.GetState(id)).Value;
        Assert.Null(state);
    }

    [Test]
    public async Task PostState_WhenCalled_AddsState()
    {
        var testState = new State { Id = 20, Name = "test", Code = "TS", CountryId = 1 };
        await _controller.PostState(testState);

        mock.Verify(m => m.States.Add(It.IsAny<State>()), Times.Once());
    }

    [Test]
    public async Task PostState_Duplicatecode_ReturnsError()
    {
        var dupeState = new State { Id = 20, Name = "test", Code = "code1", CountryId = 1 };
        await _controller.PostState(dupeState);

        mock.Verify(m => m.States.Add(It.IsAny<State>()), Times.Never());
    }
}