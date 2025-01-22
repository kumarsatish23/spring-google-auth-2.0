// src/main/java/in/vanna/aurthdemo/config/WebConfig.java
package in.vanna.aurthdemo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200") // Specify Angular's origin
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true); // Enable cookies or Authorization headers
    }
}
