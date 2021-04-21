•	Follow ( https://vlab.amrita.edu/index.php?sub=3&brch=311&sim=1835&cnt=2) to install R in personal computer.

•	Install the Biostrings package with the commands. 

                        source("http://bioconductor.org/biocLite.R")
                        biocLite("Biostrings")


 &nbsp;
 
 • Load the package 
                       
                        require(Biostrings)
                        
&nbsp;

**Procedure to Work Simulator**

 &nbsp;
 
 Follow the command on R platform
                    

        library(Biostrings)
        sigma <- nucleotideSubstitutionMatrix(match = 2, mismatch = -1, baseOnly = TRUE)
        sigma # Print out the matrix
        s1 <- "GAATTC"
        s2 <- "GATTA"
        globalAligns1s2 <- pairwiseAlignment(s1, s2, substitutionMatrix = sigma,gapOpening = -2, gapExtension = -8,          scoreOnly = FALSE)
        globalAligns1s2