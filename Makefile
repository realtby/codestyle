.PHONY:
install:
	npm i

# prettier + eslint + tsc
.PHONY:
lint:
	npm run format
	npm run lint

.PHONY: dist
dist:
	rm -rf dist
	mkdir dist

	cp package.json dist
	cp README.md dist
	cp -r src/* dist
	cp -r patches dist

.PHONY: build
build: dist

.PHONY:
release:
	npm run release

.PHONY:
prerelease:
	npm run pre-release
