using Enginizer.Api.Domain.Domain.Entities;

namespace Enginizer.Api.Infrastructure.Persistence.Repositories
{
    public interface IWordRepository
    {
        
        Task<Word> FindByIdAsync(int id);
        Task<List<Word>> GetAllAsync();
        Task<int> AddAsync(Word word);
       
        
    }
}
