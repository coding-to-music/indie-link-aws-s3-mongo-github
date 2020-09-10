/* This file is part of IndieLink. IndieLink is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. IndieLink is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with IndieLink.  If not, see <https://www.gnu.org/licenses/>.*/

import React, { Component, Fragment } from 'react'
import { Icon } from 'evergreen-ui'

export default class extends Component {
  async onChangeUploadPreview(e) {
    if (e.target.files.length > 0) {
      const picture = e.target.files[0]
      this.props.onSelectPicture && this.props.onSelectPicture(picture)
    }
  }

  render() {
    const Label = props => {
      const {
        htmlFor,
        ...otherProps
      } = props

      return (
        <label
          htmlFor={htmlFor}
          {...otherProps}
          style={{
            WebkitAppearance: 'none',
            WebkitBoxAlign: 'center',
            WebkitFontSmoothing: 'antialiased',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '3px',
            borderStyle: 'none',
            boxSizing: 'border-box',
            color: '#1070ca',
            cursor: 'pointer',
            display: 'inline-flex',
            flexWrap: 'nowrap',
            fontFamily: '"SF UI Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            fontSize: '12px',
            fontWeight: '500',
            height: '32px',
            letterSpacing: '0',
            lineHeight: '32px',
            margin: '0 5px 0 0',
            outline: 'none',
            overflow: 'visible',
            padding: '0 5px',
            position: 'relative',
            textDecoration: 'none',
            textTransform: 'none',
            verticalAlign: 'middle',
          }}
        >
          <Icon icon="media" color="#66788A" />
          <style jsx>{`
            label:active,
            label:focus,
            label:hover {
              background-color: rgba(67,90,111,.06);
              outline:none;
            }
          `}</style>
        </label>
      )
    }

    return (
      <Fragment>
        <input
          id="uploadImg"
          type="file"
          onChange={(f) => this.onChangeUploadPreview(f)}
          style={{
            opacity: 0,
            position: 'absolute',
            pointerEvents: 'none',
            width: '1px',
            height: '1px',
          }}
        />
        <Label htmlFor="uploadImg" />
      </Fragment>
    )
  }
}