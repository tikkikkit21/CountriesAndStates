using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XC.Models;

namespace api.Controllers
{
    [Route("api/States")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly StateContext _context;

        public StateController(StateContext context)
        {
            _context = context;
        }

        // GET: api/State
        [HttpGet]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            if (_context.States == null)
            {
                return NotFound();
            }
            return await _context.States.ToListAsync();
        }

        // GET: api/State/5
        [HttpGet("{id}")]
        public async Task<ActionResult<State>> GetState(int id)
        {
            if (_context.States == null)
            {
                return NotFound();
            }
            var state = await _context.States.FindAsync(id);

            if (state == null)
            {
                return NotFound();
            }

            return state;
        }

        // PUT: api/State/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutState(int id, State state)
        {
            if (id != state.id)
            {
                return BadRequest();
            }

            _context.Entry(state).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/State
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<State>> PostState(State state)
        {
            if (_context.States == null)
            {
                return Problem("Entity set 'StateContext.States'  is null.");
            }

            if (_context.States.Any<State>(c => c.code == state.code)) {
                return Problem(state.code + " code already exists!");
            }

            var newState = new State
            {
                name = state.name,
                code = state.code,
                countryId = state.countryId
            };

            _context.States.Add(newState);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetState), new { id = newState.id }, newState);
        }

        // DELETE: api/State/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteState(int id)
        {
            if (_context.States == null)
            {
                return NotFound();
            }
            var state = await _context.States.FindAsync(id);
            if (state == null)
            {
                return NotFound();
            }

            _context.States.Remove(state);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StateExists(int id)
        {
            return (_context.States?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
