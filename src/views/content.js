const LargeHeading = require('./heading-large')
const MediumHeading = require('./heading-medium')
const LocationLink = require('./link-location')
const MailLink = require('./link-mail')
const SocialMedia = require('./social-media')
const Icon = require('./icon')

module.exports = function Content (props) {
  props = props || {}
  let fullname = props.fullname || ''
  let occupation = props.occupation || ''
  let location = props.location || ''
  let bio = props.bio || ''
  let email = props.email || ''
  let twitter = props.twitter || ''
  let linkedin = props.linkedin || ''
  let instagram = props.instagram || ''
  let facebook = props.facebook || ''

  return `
<section
  class="
    display-flex
    flex-direction-column
    height-content
    height-auto-large
    overflow-auto-large
  "
>
  <div
    class="
      display-flex
      align-items-center-large
      justify-content-center-large
      flex-grow-1
      flex-grow-2-large
      max-width-35
      margin-right-auto
      margin-left-auto
      padding-48
      padding-5-large
    "
  >
    <div
      class="
        margin-right-auto
        margin-left-auto
      "
    >
      ${LargeHeading({
        children: fullname
      })}
      ${MediumHeading({
        children: occupation
      })}
      ${LocationLink({
        location
      })}
      <p
        class="
          margin-bottom-42
          font-size-16
          color-383D3B
        "
      >
        ${bio}
      </p>
      <div
        class="
          display-flex
          flex-wrap-wrap
          align-items-center
          justify-content-space-between
          margin-bottom-16
        "
      >
        ${MailLink({
          email
        })}
        ${SocialMedia({
          twitter,
          linkedin,
          instagram,
          facebook
        })}
      </div>
    </div>
  </div>
  <div
    class="
      display-flex
      align-items-center
      justify-content-space-between
      padding-top-16
      padding-right-32
      padding-left-32
      padding-right-48-large
      padding-bottom-16
      padding-left-48-large
      color-5A5C5B
      background-color-F2F0F3
    "
  >
  </div>
</section>
  `
}
