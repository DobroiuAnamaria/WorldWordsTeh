using Enginizer.Api.Domain.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enginizer.Api.Infrastructure.Persistence.Repositories
{
    public class WordRepository : IWordRepository
    {
        private readonly EnginizerDbContext _enginizerDbContext;

        public WordRepository(EnginizerDbContext enginizerDbContext)
        {
            _enginizerDbContext = enginizerDbContext;
        }
    
        public async Task<Word> FindByIdAsync(int id)
        {
            var word = await _enginizerDbContext.Words.FindAsync(id);
            if (word == null) { throw new Exception(); } // TODO: implement

            return word;

        }

        public async Task<List<Word>> GetAllAsync()
        {
            return await _enginizerDbContext.Words.ToListAsync();
        }

        public async Task<int> AddAsync(Word word)
        {
            _enginizerDbContext.Words.Add(word);
            await _enginizerDbContext.SaveChangesAsync();
            return word.Id;
        }
    }
}
