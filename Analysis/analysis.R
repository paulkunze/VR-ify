# Download and install packages
library(fifer) # used for post hoc tests on chi square
library(car) # used for Levene Test
library(lattice) # used for charts
library(ggplot2) # used for charts
library(pwr) # power tests

#  Import Data Question data into R from TXT --------------------------------------------
setwd("~/Desktop/Foodhacks/Analysis")
data <- read.table("data.txt",sep=",",stringsAsFactors=FALSE,header=TRUE)

# Understand Data Structure
str(data)
# data contains 3 variable:
# 1. id: Represents every user who tested the products
# 2. product: the 3 different prodcuts
# 3. answer: is the user's likelihood of buying the product on a 4-point scale with 1 being the lowest
# and 4 being the highest likelihood
data$product <- as.factor(data$product) # change product from integer to factor
summary(data)

# Exploring the data ----------------------------------------------------------------

# Create a boxplot

boxplot(data$answer~data$product)
# There seems to be a difference between the 3 different products


# Test Mean ---------------------------------------------------------------

# Testing Homogeneity of Variance. If results are significant, the assumtion that
# there needs to be homogeneity of variances is violated. ANOVA can´t be used.
leveneTest(answer ~ product, data=data)
# Assiumtion of homogeneity of variances NOT violated

# Test for normal distribution
qqmath(scale(data$answer),groups=data$product,abline=c(0,1))
qqnorm(scale(data$answer))
qqline(scale(data$answer),col="Red") # if line overlaps with data, indication for normal distribution
shapiro.test(data$answer) # if results significant, there is NO normal distribution

# No normal distribution therefore ANOVA not suitable. We use Kruskal-Wallis Test
kruskal <- kruskal.test(answer ~ product, data=data)
kruskal

# Calculate pairwise comparisons between products with corrections for multiple testing
pairwise_wilox <- pairwise.wilcox.test(data$answer, data$product, p.adjust.method = "bonferroni")
pairwise_wilox

# Import simulated EEG data

eeg_data <- read.csv2("~/Desktop/Foodhacks/Analysis/eeg.csv")
# Understand Data Structure
str(eeg_data)
eeg_data$product <- as.factor(eeg_data$product) # change product from integer to factor
summary(eeg_data)

# Create a boxplot
boxplot(eeg_data$engegement~eeg_data$product)

# Testing Homogeneity of Variance. If results are significant, the assumtion that
# there needs to be homogeneity of variances is violated. ANOVA can´t be used.
leveneTest(engegement ~ product, data=eeg_data)
# Assiumtion of homogeneity of variances violated. Can't use ANOVA. Have to use 

# test for normal distributaion
qqmath(scale(eeg_data$engegement),groups=data$product,abline=c(0,1))
qqnorm(scale(eeg_data$engegement))
qqline(scale(eeg_data$engegement),col="Red") # if line overlaps with data, indication for normal distribution
shapiro.test(eeg_data$engegement) # if results significant, there is NO normal distribution