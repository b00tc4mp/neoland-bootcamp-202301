/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} userId The userId of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId, callback) {
  const xhr = new XMLHttpRequest()

  xhr.onload = () => {
    const { status } = xhr

    if (status === 500) {
      const { response } = xhr

      const body = JSON.parse(response)

      const { error } = body

      callback(new Error(error))

      return

    }

    callback(null)
  }
  xhr.open("DELETE", `http://localhost:8080/stickies/${stickyId}`)
  xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
  xhr.send()
 
}
export default deleteSticky

