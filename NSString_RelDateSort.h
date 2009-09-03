/*
 * =====================================================================================
 *
 *       Filename:  NSString_RelDateSort.h
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

#import <Foundation/Foundation.h>

@interface NSString (RelDateSort)

- (NSComparisonResult)compareRelativeDate:(NSString *)aString;

@end
