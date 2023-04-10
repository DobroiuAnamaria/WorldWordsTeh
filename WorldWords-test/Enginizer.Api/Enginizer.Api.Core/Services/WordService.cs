using AutoMapper;
using Enginizer.Api.Core.Contracts;
using Enginizer.Api.Core.Models.ViewModels.User;
using Enginizer.Api.Core.Models.ViewModels.Word;
using Enginizer.Api.Domain.Domain.Entities;
using Enginizer.Api.Infrastructure.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enginizer.Api.Core.Services
{
    public class WordService : IWordService
    {
        private readonly IWordRepository _wordRepository;
        private readonly IMapper _mapper;


        public WordService(IWordRepository wordRepository, IMapper mapper)

        {
            _wordRepository = wordRepository;
            _mapper = mapper;
        }
        public async Task<int> AddWordASync(WordViewModel word)
        {
            return await _wordRepository.AddAsync(_mapper.Map<Word>(word));
        }

        public async Task<WordViewModel> GetWordById(int id)
        {
            var word = await _wordRepository.FindByIdAsync(id);
            return _mapper.Map<WordViewModel>(word);
        }

        public async Task<WordViewModel> GetRandomWordAsync()
        {
            var words = await _wordRepository.GetAllAsync();
            var random = new Random();
            int randomIndex = random.Next(words.Count);

            return _mapper.Map<WordViewModel>(words[randomIndex]);
        }
    }
}
