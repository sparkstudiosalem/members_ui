// Copyright 2019 Iced Development, LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import { colors } from '../lib/styles';
import { getAll, formatDateRange } from '../state/events';

const actionCreators = { getAll };

const baseStyles = {
  container: {
    backgroundColor: colors.primaryHighlight,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
  mainBody: {
    display: 'flex',
    height: '100%',
  },
  card: {
    display: 'inline-block',
    height: 200,
    width: 200,
    overflow: 'hidden',
    border: '1px solid black',
    borderRadius: '1em',
    padding: '0.5em',
    margin: '0.5em'
  }
};

class App extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { events } = this.props;
    let allEventList = '';

    if (events.all) {
      allEventList = (
        <div>
          <h2>All Events</h2>
          <div>
            {events.all.map((e) => {
              const dateRange = formatDateRange(e);
              return (
                <div key={e.id} style={baseStyles.card}>
                  <h5><Link to={`/events/${e.id}`}>{e.name}</Link></h5>
                  {dateRange.full_date_string}
                  {' '}
                  (
                  {e.frequency}
                  )
                  <br />
                  <i>{e.location}</i>
                  <p>{e.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div style={baseStyles.container}>
        <Header />
        {allEventList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { events } = state;
  return { events };
}

export default connect(mapStateToProps, actionCreators)(App);
