
c = require('casper').create()
###
  verbose: true
  logLevel: 'debug'
###

BASE_URL = 'http://localhost:9080'

c.start BASE_URL + '/', ->
  @test.info '# START'

c.waitFor(
  ->
    try
      @getHTML('#repo') isnt ''
    catch e
      false
,
  -> @test.pass 'render repos collection'
)

c.then ->
  @test.info '# END'

c.run()
