package in.vanna.aurthdemo.service;


import in.vanna.aurthdemo.entity.User;
import in.vanna.aurthdemo.repo.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class OAuth2UserService {
    private final UserRepository userRepository;

    public OAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User processOAuth2User(String email, String name, String picture) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
        }
        user.setName(name);
        user.setPictureUrl(picture);
        user = userRepository.save(user);
        return user;
    }
}