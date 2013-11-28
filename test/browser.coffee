
c = require('casper').create()
###
  verbose: true
  logLevel: 'debug'
###

BASE_URL = 'http://localhost:9080'

c.on 'page.error', (line) -> @log '[REMOTE ERR] ' + line

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
  hasListRendered = @evaluate ->
    $('#repo').find('li').length != 0
  @test.assert hasListRendered, 'render repos collection as a list'

c.then ->
  @debugHTML 'body' if @verbose?
  @test.info '# END'

c.run()
