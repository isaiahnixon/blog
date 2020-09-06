---
title: Easy Automatic File Backups with Borg | Ubuntu 18.04
date: "2020-09-05T12:00:00Z"
description: “And when they ask us what we're doing, you can say, We're remembering." - Ray Bradbury
---

> "And when they ask us what we're doing,
> you can say, We're remembering.
> That's where we'll win out in the long run."
> -- Ray Bradbury (Fahrenheit 451)



# The Problem

Have you ever deleted a file and two days later needed to download it again? Have you ever done this with files that take forever to re-download? Me too...

# The Solution

Create automated backups of your downloaded files.

This sounds like it could be cumbersome and resource-intensive. However, I recently discovered [BorgBackup](https://borgbackup.org) (Borg) and it was neither.

## Step by Step

Also available as a [Gist](https://gist.github.com/isaiahnixon/f452cb1a0d505ed1381312c18e767295), and a [YouTube walkthrough](https://youtu.be/G_hCmAfVKAM).

The following commands are set up for Ubuntu 18.04 but should translate to any major operating system without too much hassle.

1. Create a directory.

```
mkdir bkp
```

2. Install Borg.

```
sudo apt install borgbackup -y
```

3. Create the repository.
```
borg init --encryption none bkp/
```

4. Add crons job taking backups and cleaning up old ones.

```
crontab -e
```

Using your text editor, add the following lines:
```
0 12 * * * borg create ~/bkp::Downloads-$(date '+\%m-\%d-\%Y') ~/Downloads/
0 13 * * * borg prune -v --list --keep-within=7d ~/bkp
```

## Note on Extraction:

When extracting files using Borg, the directory structure in the backup will be the true system path of the directory that you backed up. For this reason, you must specify the system path when extracting the backup to a folder other than the source folder. For example:

```
borg extract ../bkp::Downloads-09-05-2020 home/e/Downloads
```

On my system, this command extracts the Dowloads backup from September 5th to the current directory. However, your username probably won't be the letter `e`.


# Conclusion

Borg has a lot of in-depth and well-developed features outside the scope of this use case. I look forward to setting up some more complex scenarios and creating more walkthroughs in the future. Hopefully, this helps you get started.
