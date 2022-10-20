## Introduction
10/18/2022
#Rise 2 Challenge

Team Contact Info
Vince
    Phone: 618-972-9547
    Github: https://github.com/kainew5843
Mamadou
    Phone: 9018570478
    Github: https://github.com/mamadou1991

Kaine
    Phone: 8168852541
    Github: https://github.com/kainew5843
Phoung
    Phone: 6365417008
    Github: PhuongHoang68
Mason
    Phone: (314)-560-9010
    Github: https://github.com/JayWhiteBuffalo


## Problem
There are so many ways to excerise. How can we help form a optimal custom workout plan that caters to the type of exercise I prefer? 
How do I know if the exercise routine I am doing is effective? 
Given limited equipment, what excerises are available for me to perform given a targeted muscle group? 
How can I share my workout routine and recieve feedback from other people on how to improve? 
I want to be able to store : 
A list of exercises and their properties

A list of workouts and their properties (containing exercises)

A list of logged workouts (workout and date of workout)

All the set data from each logged workout (exercise, number of sets, weight of each set, reps of each set)

## Solution

Rise2Challenge Will allow a User/Member to create their own personal workout plan, ^share their results^, and ^gain feedback from other users^. 







## Project Overview

Workout Plan
The User can create a workout plan that fits all given criteria.
User may specify Month/Week/Day/Duration/Frequency of custom workout routine and save to be accessed later

User may choose from suggested exercises based on
-Intensity:
    High Intensity / Low Intensity
-Class:
    Strength
    Endurance
    Flexibility
-Catagory
    Whole Body
    Upper / Lower
    Target Muscle Group (Abs, Arms, Back, Calves, Chest, Legs etc...)
-Equipment
    Bench Press
    Barbell
    None
    Matt
    Etc.
- Target Muscle Group
    Delts
    Quads
    Tricepts
    Etc..
After Choosing Prefences User will have a list of displayed excercises that they can select and save to their custom workout routine. (e.g Push Day , Pull Day, Leg Day)

After the Routine is made user can then assign Frequency
Ex. Edit by month, week, day
    Push Day - Twice a Week : Monday & Friday
    Pull Day - Twice a Week: Tues & Saturday
    Leg Day - Once every other week: Wensday

User Will have tab(s) for :
My Workouts - Their saved workout routines
    *Add New Workout
    *Edit Workout
My Progress - The portion that takes all workout data input from workout sessions and show stats
    *Max lifts
    *Longest Run
    *Fastest Mile
Community - The portion that allows to post workouts, comment on workout plans, rate workouts

## Process
Front End - *Landing Page (Run Buddy?)
                choice to log in
                Answers How, Why, when etc
                Call to Action
                About Us
                Contact
            *User Homepage
                My Workouts
                    *Stored workouts & Current plan page
                        Add Workout
                            *Workout Maker Page   
                Progress
                Community
            *Progress Page
            *Community Page
    
Back End - Connection
            -Default Connection
            -User Auth Connection

            User
            - CRUD Account
            - CRUD Workout 
            - Input/Store post workout Data

            DB
            -Tables
                *Users Table* - 
                    Account
                        + id, Username, email?, password, 
                *Excercises Table*
                *Custom Workout Table *
                *Exercise/Workout Table*
                 - Connects which exercise are part of which workout
                *log data for workout Table*
                    -Stores workout session head
                    *Log entry table*
                    -Stores stats for each workout session
                *Ex Type*
                *Ex equipment*
                *Workout type*
                





## Next Steps

