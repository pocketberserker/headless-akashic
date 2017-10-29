# headless-akashic

**headless-akashic** is a headless version of [Akashic Sandbox][sandbox].
You can run games using [Akashic Engine][ae] on [Node.js][node], without Web browsers.
Useful for unit testing.

> Unfortunately, Akashic Engine does not provide English documentation yet.
> Whole this library is documented in English just to be prepared for their future translation.
> You need to know Japanese to use this library in practice, at least currently.

## Features

- A complete emulation of a `g.Game` instance
- Point events emulation through API
- (Screenshot API) (planned but NOT YET)

## Documents

- [Guide][guide] or [利用ガイド (ja)][guide-ja]

## License

MIT. See [LICENSE][license].

Some files in the `drivers/` directory are derived from [Akashic Sandbox][sandbox].
See [LICENSE-DRIVERS][license-drivers] for detail.

[sandbox]: https://github.com/akashic-games/akashic-sandbox
[ae]: https://akashic-games.github.io/
[node]: https://nodejs.org/
[guide]: https://github.com/xnv/headless-akashic/blob/master/doc/guide.en.md
[license]: https://github.com/xnv/headless-akashic/blob/master/LICENSE
[license-drivers]: https://github.com/xnv/headless-akashic/blob/master/LICENSE-DRIVERS
