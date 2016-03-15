#!/usr/bin/python
# -*- coding: UTF-8 -*-


# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
firstName = form.getvalue('firstName')
lastName  = form.getvalue('lastName')

# Do stuff
print "Content-Type: text/plain;charset=utf-8"
print
print "Hello..." + firstName + " " + lastName
