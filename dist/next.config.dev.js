"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  /* config options here */
};
var MS_PER_SECOND = 1000;
var SECONDS_PER_HOUR = 3600;
var PAGES_BUFFER_LENGTH = 20;
module.exports = {
  onDemandEntries: {
    maxInactiveAge: SECONDS_PER_HOUR * MS_PER_SECOND,
    pagesBufferLength: PAGES_BUFFER_LENGTH
  }
};