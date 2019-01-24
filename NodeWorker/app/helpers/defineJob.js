export default async (name, agenda) => {
  agenda.define(name, (job, done) => {
    console.log('hello world')
    done()
  })
}
