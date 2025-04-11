
ifneq ("$(wildcard .env)","")
	include .env
endif

.PHONY: help clean build

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  build                 Build" 
	@echo "  clean                 Clean up"
	@echo "  help                  Show this help message"

default: help

build:
	bash scripts/build.sh

clean:
	bash scripts/clean.sh