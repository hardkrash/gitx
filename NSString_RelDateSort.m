/*
 * =====================================================================================
 *
 *       Filename:  NSString_RelDateSort.m
 *
 *    Description:  Adds relative date sorting to the NSString.
 *
 *        Version:  1.0
 *        Created:  07/12/2009 23:33:12
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  Steven Michalske (sm), smichalske@gmail.com
 *        Company:  
 *
 * =====================================================================================
 */

#import "NSString_RelDateSort.h"

@implementation NSString (RelDateSort)

- (NSComparisonResult)compareRelativeDate:(NSString *)aString
{
	NSLog(aString);
	// fix up the dates to strings
	return [self compare:aString];
}

@end
