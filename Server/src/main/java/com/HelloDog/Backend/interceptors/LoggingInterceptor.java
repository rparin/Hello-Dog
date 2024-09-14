package com.HelloDog.Backend.interceptors;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component  // Registers this class as a Spring component
public class LoggingInterceptor implements HandlerInterceptor {

    // Logger for this class
    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingInterceptor.class);

    @Override
    // Logs HTTP method and URI before the request is handled
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        LOGGER.info("Request: {} {} Query:{}", request.getMethod(), request.getRequestURI(), request.getQueryString());
        return true;  // Allows the request to proceed
    }

    @Override
    // Logs response status and URI after request completion. Logs exceptions if any
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        LOGGER.info("Response: {} {}", response.getStatus(), request.getRequestURI());
        if (ex != null) {
            // Logs any exception
            LOGGER.error("Exception: ", ex);
        }
    }
}
