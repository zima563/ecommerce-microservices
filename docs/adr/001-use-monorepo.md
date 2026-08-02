# ADR-001: Use NestJS Monorepo

## Status

Accepted

## Context

The project contains multiple microservices that share common code such as configuration, logging, messaging, and utilities.

## Decision

Use NestJS Monorepo to simplify code sharing and development.

## Consequences

Pros:

- Shared libraries
- Easier local development
- Centralized dependency management

Cons:

- Larger repository
- Requires discipline when managing shared code
