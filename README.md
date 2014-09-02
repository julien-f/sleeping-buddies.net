# sleeping-buddies.net

> Community driven social networking website which helps to find people to share a bed with.

## Presentation

New weapon against
[loneliness](https://en.wikipedia.org/wiki/Loneliness), *sleeping-buddies.net*
aims to help people to find other people to share a bed with.

Why? Because [hugs](https://en.wikipedia.org/wiki/Hug) are good for
humans, and being with one another can really help (take a look at the
[Free Hugs
Campaign](https://en.wikipedia.org/wiki/Free_Hugs_Campaign)).

***sleeping-buddies.net* is not about sex!** You are of course free to
engage in any activities you like with the people you met (as long
as its consensual obviously) but this is **not** the primary goal.

### Values

1. Respect
- Trust
- Privacy

### Concepts

- Web of trust (similar to [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#Web_of_trust))

## Technical requirements

The following ideas are starting points and are open to debate.

- [Responsive design](https://en.wikipedia.org/wiki/Responsive_web_design)
- JavaScript allowed only for [enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) (not required)
- [Highly maintainable](https://en.wikipedia.org/wiki/Software_maintenance)
    - All code must pass [JSHint](http://jshint.com/) with project configuration without warnings
    - Ideally, the code should be maintainable by only one person
    - Ideally, the code should be easily understandable by a new person
- Clear separation of the client and the server
    - Any one of them should be interchangeable
    - Documented API

### Server

- It should be secure
    - It should be runnable with the almost no rights
    - No passwords must be stored, only [secure hashes](https://www.npmjs.org/package/hashy)
    - Ideally, sensitive data (e.g. email addresses, password hashes,
      bank account numbers) should be stored in a second database used
      only through a second server not exposed directly to the outside
    - Ideally, sensitive data should only be accessible when necessary
      (e.g. bank account numbers encrypted with the user password)

## Contributions

Contributions are much welcomed:

- report any [issue](https://github.com/julien-f/sleeping-buddies.net/issues)
  you've encountered;
- fork and create a pull request.

I don't have much time to work on this but I will be happy to help
with advices, guidance and discussions :)

## License

AGPLv3 © [Julien Fontanet](http://julien.isonoe.net)
