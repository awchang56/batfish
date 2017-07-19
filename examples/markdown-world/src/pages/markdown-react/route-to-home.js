/*---
title: Route To Home
description: Here to show rerouting with route-to
---*/

'use strict';
const React = require('react');
const md = require('batfish/md');
const PageShell = require('../../components/page-shell');
const PageHero = require('../../components/page-hero');
const routeTo = require('@mapbox/batfish/route-to');
class RouteToHomePage extends React.Component {
  render() {
    return (
      <PageShell>
        <PageHero
          bgColor="purple-light"
          title="Route To Home"
          description="Here to show rerouting with route-to"
        />
        <div className="my36 px36 prose">
          {md`#### This page won''t even be seen because it automatically gets routed to home!`}
        </div>
        {routeTo('/')}
      </PageShell>
    );
  }
}
module.exports = RouteToHomePage;