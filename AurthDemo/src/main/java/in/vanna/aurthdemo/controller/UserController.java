package in.vanna.aurthdemo.controller;

import in.vanna.aurthdemo.entity.User;
import in.vanna.aurthdemo.service.GoogleTokenVerifierService;
import in.vanna.aurthdemo.service.OAuth2UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
    @RequestMapping("/auth")
public class UserController {

    private final GoogleTokenVerifierService tokenVerifierService;
    private final OAuth2UserService userService;

    public UserController(GoogleTokenVerifierService tokenVerifierService, OAuth2UserService userService) {
        this.tokenVerifierService = tokenVerifierService;
        this.userService = userService;
    }

    @PostMapping("/google")
    public ResponseEntity<?> authenticateWithGoogle(@RequestBody Map<String, String> payload) {
        try {
            String token = payload.get("token");
            var idToken = tokenVerifierService.verifyToken(token);

            if (idToken != null) {
                String email = idToken.getPayload().getEmail();
                String name = (String) idToken.getPayload().get("name");
                String picture = (String) idToken.getPayload().get("picture");

                User user = userService.processOAuth2User(email, name, picture);
                return ResponseEntity.ok(user);
            }
            return ResponseEntity.status(401).body("Invalid token");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Authentication error: " + e.getMessage());
        }
    }
}
