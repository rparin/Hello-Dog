package com.HelloDog.Backend.filters;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component  // Registers this filter as a Spring component.
public class LoggingFilter extends OncePerRequestFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingFilter.class);  // Logger instance for logging.

    @Override
    protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request,
                                    jakarta.servlet.http.HttpServletResponse response,
                                    jakarta.servlet.FilterChain filterChain)
            throws jakarta.servlet.ServletException, IOException {

        // Log request details before processing the request.
        LOGGER.debug("Request: Method={}, URI={}", request.getMethod(), request.getRequestURI());
        getRequestHeaders(request);

        long startTime = System.currentTimeMillis();  // Capture the start time to measure processing duration.

        try {
            filterChain.doFilter(request, response);  // Continue with the next filter in the chain.
        } finally {
            long duration = System.currentTimeMillis() - startTime;  // Calculate how long the request took.

            // Log response details after request processing.
            LOGGER.debug("Response: Status={}, URI={}, Duration={}ms", response.getStatus(), request.getRequestURI(), duration);
            getResponseHeaders(response);

            // Log any exceptions that occurred during processing.
            if (request.getAttribute("javax.servlet.error.exception") != null) {
                LOGGER.error("Exception during request processing",
                        (Exception) request.getAttribute("javax.servlet.error.exception"));
            }
        }
    }

    // Utility method to extract request headers for logging.
    private void getRequestHeaders(HttpServletRequest request) {
        request.getHeaderNames().asIterator().forEachRemaining(header -> LOGGER.debug("Request Header: {}={}", header, request.getHeader(header)));
    }

    // Utility method to extract response headers for logging.
    private void getResponseHeaders(HttpServletResponse response) {
         response.getHeaderNames()
                .forEach(header -> LOGGER.debug("Response Header: {}={}", header, response.getHeader(header)));
    }
}
