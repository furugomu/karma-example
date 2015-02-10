fixture = (name) ->
  document.body.insertAdjacentHTML 'beforeend', __html__["fixtures/#{name}.html"]

describe 'chagashi', ->
  beforeEach ->
    fixture 'chagashi'

  it 'replace 高級茶菓子 to 高森藍子', ->
    assert.include document.body.textContent, '高級茶菓子'
    chagashi(document.body)
    assert.include document.body.textContent, '高森藍子'
