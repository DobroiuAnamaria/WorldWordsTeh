using AutoMapper;
using Azure.Core;
using Enginizer.Api.Core.Contracts;
using Enginizer.Api.Core.Models.ViewModels.User;
using Enginizer.Api.Domain.Domain.Entities;
using Enginizer.Api.Infrastructure.Persistence.Repositories;

namespace Enginizer.Api.Core.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)

        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<List<UserViewModel>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllAsync();
            return _mapper.Map<List<UserViewModel>>(users);

        }

        public async Task<UserViewModel> GetUserById(int id)
        {
            var user = await _userRepository.FindByIdAsync(id);
            return _mapper.Map<UserViewModel>(user);
        }

        public async Task<int> AddUserASync(UserViewModel user)
        {
            return await _userRepository.AddAsync(_mapper.Map<User>(user));
        }

        public async Task<UserViewModel> UpdateUserAsync(UserUpdateViewModel request)
        {
            var user = await _userRepository.FindByIdAsync(request.Id);
            if (user is null)
            {
                throw new Exception();
            }
            user.Name = request.Name;
            user.Email = request.Email;
            user.Password = request.Password;
            user.Points = request.Points;

            await _userRepository.UpdateAsync(user);
            return _mapper.Map<UserViewModel>(user);
        }

        public async Task<int> DeleteUserAsync(int id)
        {
            return await _userRepository.DeleteAsync(id);
        }

        public async Task<UserViewModel> UpdatePoints(int id, int points)
        {
            var user = await _userRepository.FindByIdAsync(id);
            user.Points = points;
            await _userRepository.UpdateAsync(user);
            return _mapper.Map<UserViewModel>(user);
        }
    }
}
