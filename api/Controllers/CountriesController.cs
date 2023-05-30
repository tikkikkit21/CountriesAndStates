using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XC.Models;

namespace api.Controllers
{
    [Route("api/Countries")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly CountryContext _context;
        private readonly StateContext _scontext;

        public CountriesController(CountryContext context, StateContext scontext)
        {
            _context = context;
            _scontext = scontext;
        }

        // GET: api/Countries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
        {
            if (_context.Countries == null)
            {
                return NotFound();
            }
            return await _context.Countries.ToListAsync();
        }

        // GET: api/Countries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Country>> GetCountry(int id)
        {
            if (_context.Countries == null)
            {
                return NotFound();
            }
            var country = await _context.Countries.FindAsync(id);

            if (country == null)
            {
                return NotFound();
            }

            return country;
        }

        [HttpGet("{code}/states")]
        public async Task<ActionResult<IEnumerable<State>>> GetStates(string? code)
        {
            if (_context.Countries == null)
            {
                return NotFound();
            }

            var country =  _context.Countries.SingleOrDefault<Country>(c => c.code.Equals(code));

            if (country == null) {
                return NotFound();
            }

            var stateList = _scontext.States.Where(s => s.countryId == country.id);

            if (stateList == null)
            {
                return NotFound();
            }

            return await stateList.ToListAsync();
        }

        // PUT: api/Countries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCountry(int id, Country country)
        {
            if (id != country.id)
            {
                return BadRequest();
            }

            _context.Entry(country).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryExists(id))
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

        // POST: api/Countries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Country>> PostCountry(Country country)
        {
            if (_context.Countries == null)
            {
                return Problem("Entity set 'CountryContext.Countries'  is null.");
            }

            if (_context.Countries.Any<Country>(c => c.code == country.code)) {
                return Problem(country.code + " code already exists!");
            }

            var newCountry = new Country
            {
                name = country.name,
                code = country.code
            };

            _context.Countries.Add(newCountry);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCountry), new { id = newCountry.id }, newCountry);
        }

        // DELETE: api/Countries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCountry(int id)
        {
            if (_context.Countries == null)
            {
                return NotFound();
            }
            var country = await _context.Countries.FindAsync(id);
            if (country == null)
            {
                return NotFound();
            }

            _context.Countries.Remove(country);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CountryExists(int id)
        {
            return (_context.Countries?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
