/* This file is part of IndieLink. IndieLink is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. IndieLink is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with IndieLink.  If not, see <https://www.gnu.org/licenses/>.*/

import React from 'react'
import { Pane, Link, Text, Icon, Paragraph, Heading } from 'evergreen-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }
  render() {
    const { href1, icon, text1, text2 } = this.props
    const { hover } = this.state

    return (
      <Pane>
        <Link
          href={href1}
          textDecoration="none"
          aria-label={text1}
          float="left"
          borderRadius={5}
          background="#fff"
          width={300}
          height={200}
          margin={50}
        >
          <Pane
            onMouseOver={() => this.toggleHover()}
            onMouseOut={() => this.toggleHover()}
            borderRadius={5}
            width={300}
            height={200}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            flexDirection="column"
            padding={10}
            elevation={hover ? 2 : 1}
            backgroundColor={hover ? '#ebf3fb' : '#fff'}
          >
            <Pane
              borderRadius={5}
              width={282}
              height={100}
              paddingX={24}
              paddingTop={24}
              alignItems="center"
            >
              <Text><Icon icon={icon} size={34} color="#1170ca" /></Text>
            </Pane>
            <Pane paddingBottom={24} paddingX={24} height={100}>
              <Heading size={600} fontWeight={500}>
                {text1}
              </Heading>
              <Paragraph color="muted" size={500}>
                {text2}
              </Paragraph>
            </Pane>
          </Pane>
        </Link>
      </Pane>
    )
  }
}
