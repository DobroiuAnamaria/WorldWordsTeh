using Enginizer.Api.Core.Contracts;
using Enginizer.Api.Core.Models.ViewModels.User;
using Enginizer.Api.Core.Models.ViewModels.Word;
using Enginizer.Api.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace Enginizer.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordsController : ControllerBase
    {
        private readonly ILogger<WordsController> _logger;
        private readonly IWordService _wordService;

        public WordsController(ILogger<WordsController> logger, IWordService wordService)
        {
            _logger = logger;
            _wordService = wordService;
        }

        [HttpGet("id")]
        public async Task<ActionResult<WordViewModel>> GetById(int id)
        {
            return Ok(await _wordService.GetWordById(id));
        }

        [HttpGet("/random")]
        public async Task<ActionResult<WordViewModel>> GetRandomWord()
        {
            return Ok(await _wordService.GetRandomWordAsync());
        }

        [HttpPost]
        public async Task<ActionResult<WordViewModel>> Add(WordViewModel word)

        {
            return Ok(await _wordService.AddWordASync(word));
        }
    }
}
