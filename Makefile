.PHONY:
install:
	npm ci --also=dev
	husky install
	npm run npmrc:public

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
	cp .npmrc dist
	cp -r src/* dist
	cp -r patches dist
	cp -r .husky dist
	cp -r bin dist

.PHONY: build
build: dist

.PHONY:
release:
	npm run release

.PHONY:
prerelease:
	npm run pre-release
